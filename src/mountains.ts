export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kililmanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(mountains: Mountain[]) {
  let highest: Mountain = mountains[0];
  mountains.forEach((mountain) => {
    console.log(mountain.height);
  });
}

findNameOfTallestMountain(mountains);

let result: Mountain = findNameOfTallestMountain(mountains);

Console.log(result)

export {Mountain, findNameOfTallestMountain}
