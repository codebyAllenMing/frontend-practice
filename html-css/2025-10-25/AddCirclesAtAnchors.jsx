// 🎨 Illustrator 節點圓圈標記器 v2
// 作者：Allen Ming 專用版本（支援群組、自動 BringToFront、集中管理）

function main() {
  if (app.documents.length === 0) {
    alert("⚠️ 請先開啟一個文件！");
    return;
  }

  var doc = app.activeDocument;
  if (doc.selection.length === 0) {
    alert("⚠️ 請先選取至少一條路徑！");
    return;
  }

  // 建立節點群組（NodeMarkers）
  var markerGroup = doc.groupItems.add();
  markerGroup.name = "NodeMarkers";

  var radius = 6; // 節點圓半徑
  var count = 0;

  // 🎯 遞迴處理群組（如果有的話）
  function processItem(item) {
    if (item.typename === "GroupItem") {
      for (var i = 0; i < item.pageItems.length; i++) {
        processItem(item.pageItems[i]);
      }
    } else if (item.typename === "PathItem") {
      addAnchors(item);
    }
  }

  // 🟣 在每個錨點上加圓圈
  function addAnchors(path) {
    var strokeColor = path.strokeColor;
    for (var i = 0; i < path.pathPoints.length; i++) {
      var pt = path.pathPoints[i].anchor;

      var circle = doc.pathItems.ellipse(
        pt[1] + radius, // Y 座標（AI 的 Y 軸向下）
        pt[0] - radius, // X 座標
        radius * 2,
        radius * 2
      );

      circle.stroked = false;
      circle.filled = true;
      circle.fillColor = strokeColor;
      circle.move(markerGroup, ElementPlacement.PLACEATBEGINNING);

      count++;
    }
  }

  // 處理所有選取物件
  for (var i = 0; i < doc.selection.length; i++) {
    processItem(doc.selection[i]);
  }

  // 最後將群組置頂
  markerGroup.zOrder(ZOrderMethod.BRINGTOFRONT);

  alert("✅ 已建立 " + count + " 個節點圓圈！\n群組名稱：NodeMarkers");
}

main();