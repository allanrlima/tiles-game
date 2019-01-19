export const getAllRecords = () => {
  const records = localStorage.getItem("records");
  if (records) {
    const parsedRecords = JSON.parse(records);
    return parsedRecords;
  }
  return [];
};

export const setRecord = record => {
  const records = [record, ...getAllRecords()];
  const stringfiedRecords = JSON.stringify(records);
  localStorage.setItem("records", stringfiedRecords);
};

export const getTopTenRecords = () => {
  const records = getAllRecords();
  const topTenrecords = records.sort((a, b) => b.step - a.step).slice(0, 10);
  return topTenrecords;
};
