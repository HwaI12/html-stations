function getData() {
    const test = [
      { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
      { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
    ];
    return test.map(buildFullName);
  }
  
  function buildFullName(data) {
    const full_name = `${data.family_name} ${data.first_name}`;
    return { ...data, full_name };
  }
  
  const result = getData();
  console.log(result);
  