export const PATIENTS = [
  {
    id: 1,
    profile:
      "https://www.fakepersongenerator.com/Face/female/female20161024687870666.jpg",
    name: "Nadia J Mendoza",
    age: 43,
    birthday: "12/10/1978",
    mobile: "724-991-0271",
    email: "jennifer2004@gmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Cough",
  },
  {
    id: 2,
    profile:
      "https://www.fakepersongenerator.com/Face/male/male1084880940063.jpg",
    name: "Rudolph G Lamanna",
    age: 45,
    birthday: "12/10/1978",
    mobile: "847-437-5163",
    email: "cornell_medhur@yahoo.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Cold",
  },
  {
    id: 3,
    name: "Harlan A Macek",
    profile:
      "https://www.fakepersongenerator.com/Face/male/male20151086213205750.jpg",
    age: 27,
    birthday: "12/10/1978",
    mobile: "731-333-6896",
    email: "kasey_turne0@hotmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Sore Throat",
  },
  {
    id: 4,
    profile:
      "https://www.fakepersongenerator.com/Face/male/male1084189944854.jpg",
    name: "Robert V Owings",
    age: 28,
    birthday: "5/15/1993 ",
    mobile: "724-991-0271",
    email: "angelo1973@hotmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Fever",
  },
  {
    id: 5,
    profile:
      "https://www.fakepersongenerator.com/Face/female/female20111023430856323.jpg",
    name: "Beverly E Ortiz",
    age: 56,
    birthday: "8/3/1955",
    mobile: "949-295-3156",
    email: "nora1994@yahoo.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Cough",
  },
  {
    id: 6,
    profile:
      "https://www.fakepersongenerator.com/Face/female/female1023115927063.jpg",
    name: "Linda E Healey",
    age: 19,
    birthday: "12/10/1978",
    mobile: "724-991-0271",
    email: "jennifer2004@gmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Cough",
  },
  {
    id: 7,
    profile:
      "https://www.fakepersongenerator.com/Face/female/female20171026280460205.jpg",
    name: "Lydia J Jones",
    age: 33,
    birthday: "12/04/1978",
    mobile: "724-991-0271",
    email: "jenni2004@gmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Headaches",
  },
  {
    id: 8,
    profile:
      "https://www.fakepersongenerator.com/Face/female/female20141023812616638.jpg",
    name: "Rachel B Reese",
    age: 34,
    birthday: "12/10/1998",
    mobile: "724-991-0271",
    email: "dfgjsdgb@gmail.com",
    address:
      "2762 High Meadow Lane City, State, Zip: Sweet Valley, Pennsylvania(PA), 18656",
    disease: "Burning Eyes",
  },
];

export const getPatientById = (id) => {
  return PATIENTS.find((d) => d.id == id);
};
