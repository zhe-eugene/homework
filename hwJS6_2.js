"use strict";

const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

function findValueByKey(companyName) {
  let companyClients = company.clients;
  let subCompany = [];
  function searchInfo(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === companyName) {
        subCompany = arr[i];
      } else if (Array.isArray(arr[i].partners)) {
        searchInfo(arr[i].partners);
      }
    }
  }
  searchInfo(companyClients);
  return subCompany;
}

console.log(findValueByKey("Клієнт 1"));
console.log(findValueByKey("Клієнт 1.2"));
console.log(findValueByKey("Клієнт 1.2.3"));
