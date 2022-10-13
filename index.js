function render(maze) {
  const arr = maze.split("\n").map((row) => (row ? row.split("") : []));
  if (!arr[0].length) {
    arr.splice(0, 1);
  }
  const canva = document.querySelector(".canva");
  arr.forEach((row, idx1) => {
    canva.innerHTML += `<div class="row"></div>`;
    const rowRefs = document.querySelectorAll(".row");
    const rowRef = rowRefs[rowRefs.length - 1];
    row.forEach((cell, idx2) => {
      let id = "_" + idx1 + "_" + idx2;
      let html = `<div class="cell`;
      if (cell !== ".") {
        html += ` wall`;
      }
      html += `" id="${id}"></div>`;
      rowRef.innerHTML += html;
    });
  });
  document
    .getElementById("_" + (arr.length - 1) + "_" + (arr[arr.length - 1].length-1))
    .classList.toggle("last");
}

function pathFinder(maze) {
  const arr = maze.split("\n").map((row) => (row ? row.split("") : []));
  if (!arr[0].length) {
    arr.splice(0, 1);
  }
  const path = [
    {
      coords: [0, 0],
      prev: -1,
      next: -1,
      variants: [],
    },
  ];

  const ways = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let pid = 0;
  let i = 0;
  const wayfinder = () => {
    document.querySelector(".curr")?.classList.toggle("curr");
    document
      .getElementById("_" + path[pid].coords[0] + "_" + path[pid].coords[1])
      .classList.toggle("curr");

    ways.forEach((way) => {
      let v = arr[path[pid].coords[0] + way[0]]?.[path[pid].coords[1] + way[1]];
      if (path[pid].next >= 0 || v !== ".") {
        return;
      }
      if (
        path.findIndex(
          (p) =>
            p.coords[0] === path[pid].coords[0] + way[0] &&
            p.coords[1] === path[pid].coords[1] + way[1]
        ) >= 0
      ) {
        return;
      }
      const next = JSON.parse(JSON.stringify(path[pid]));
      next.coords = [
        path[pid].coords[0] + way[0],
        path[pid].coords[1] + way[1],
      ];
      path.push(next);
      path[path.length - 1].prev = pid;
      path[pid].next = path.length - 1;
      document
        .getElementById("_" + path[pid].coords[0] + "_" + path[pid].coords[1])
        .classList.toggle("path",true);
    });
    if (path[pid].prev < 0 && i > 1) {
      return false;
    }
    if (path[pid].next === -1 && path[pid].prev >= 0) {
      pid = path[pid].prev;
      path[pid].next = -1;
      document
        .getElementById("_" + path[pid].coords[0] + "_" + path[pid].coords[1])
        .classList.toggle("path",false);
      i++;
      setTimeout(() => {
        wayfinder();
      }, 10);
      return;
    }
    if (
      path[path[pid].next].coords[0] === arr.length - 1 &&
      path[path[pid].next].coords[1] === arr.length - 1
    ) {
      return true;
    }
    pid = path[pid].next;
    i++;
    setTimeout(() => {
      wayfinder();
    }, 10);
  };

  setTimeout(() => {
    wayfinder();
  }, 100);
  window.pathh = path
}
