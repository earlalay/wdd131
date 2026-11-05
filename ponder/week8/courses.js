const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        setSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        setSections(this.sections);
        }
    }
};
            

function setClassNameAndNumber(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

setClassNameAndNumber(aCourse);


function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`
}

function setSections(sections) {
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionsEl.innerHTML = html.join('');
}

setSections(aCourse.sections);


function enrollHandler(ev) {
    const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    if (ev.target.id === "enrollStudent") {
        aCourse.enrollStudent(sectionNum);
    }
    else if (ev.target.id === "dropStudent") {
        aCourse.dropStudent(sectionNum);
    }
}

document
    .querySelector("#enrollStudent")
    .addEventListener("click", enrollHandler);

document
    .querySelector("#dropStudent")
    .addEventListener("click", enrollHandler);
