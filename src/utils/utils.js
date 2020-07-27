const fs = require('fs');
const path = require('path');

module.exports = {
  
  createFileData(teachersData){
    let data = JSON.stringify(teachersData);
    fs.writeFileSync(path.join(__dirname, '..', 'data/teachers.json'), data);
  },

  readFileData() {
    let rawData = fs.readFileSync(path.join(__dirname, '..', 'data/teachers.json'));
    let teachersData = JSON.parse(rawData);
    return teachersData;
  },

  concatIds(response) {
    let teachersIds = '';
    response.data.forEach(element => {
      response = element.data.teachers.map(teacher => teacher.memberId);

    });

    response.forEach(id => {
      teachersIds += id + ',';
    });

    let requestTeachersInfos = {
      q: `teacher_card!'teacherids=${teachersIds.substring(0, teachersIds.length - 1)}'`
    };
    return requestTeachersInfos;
  }
}