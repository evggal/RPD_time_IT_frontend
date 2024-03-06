import {searchTempate, Critical, rpd, rpdinfo} from "../interface/interface"

export const SearchRpd = async (filter: searchTempate) : Promise<Array<rpd>> => {
    let dto: Critical = {
        faculty: filter.faculty,
        specialtyNumber: filter.specialtyNumber,
        groupName: filter.groupName,
        name: filter.name,
        numberOfDepartament: filter.numberOfDepartament,
        typeOfControl: filter.typeOfControl,
        fo: filter.formaObuchenua,
        countOfHourLecture: undefined,
        countOfHourPractice: undefined,
        countOfHourLab: undefined,
        countOfHourCourseProject: undefined,
        countOfHourCourseWork: undefined,
        srs: undefined,
        examHours: undefined,
        typeOfCourseProject: undefined
    }

    console.log(JSON.stringify(dto), 0)
    const response = await window.fetch(process.env.REACT_APP_API + '/RPD/SearchRpd', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(dto),
    })
    
    let content: Array<rpd> = await response.json()
    console.log(content)
    return content
}
export const GetAllCritical = async () : Promise<Array<Critical>> => {

    const response = await window.fetch(process.env.REACT_APP_API + '/RPD/GetCriticalInfos', {

        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
    })
    let content: Array<Critical> = await response.json()
    return content
}

export const GetAllCriticalByCriticals = async (critical: Critical): Promise<Array<Critical>> => {
    console.log(JSON.stringify(critical), "JSON")
    const response = await window.fetch(process.env.REACT_APP_API + '/RPD/SearchCriticalInfos', {

        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(critical),
    })
    let content: Array<Critical> = await response.json()
    return content
}
export const CreateRpd = async (Rpd: rpd) => {
    const response = await window.fetch(process.env.REACT_APP_API + '/RPD/CreateRPD', {

        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(Rpd),
    })
    if(response.status!==200){
        alert("Ошибка, рпд не создан")
    }
    else{
        alert("Рпд создан")
    }
}

export const ChangeRpdInfoByRpd = async (Rpd: rpd, RpdInfo: rpdinfo) => {
    const response = await window.fetch(process.env.REACT_APP_API + '/RPD/ChangeRpdInfosByRpd', {

        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(
            { source: Rpd, des: RpdInfo }),
    })
    if(response.status!==200){
        alert("Ошибка, рпд не изменен")
        return false
    }
    else{
        
        return true
    }
}

// export const DownloadRpd = async (Rpd: rpd) => {
//     const response = await window.fetch(process.env.REACT_APP_API + '/RPD/GenerateRPD', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json;charset=UTF-8',
//         },
//         body: JSON.stringify(Rpd),
//     })

//     return await response.json()
// }
export async function DownloadRpd(Rpd: rpd) {
    fetch(process.env.REACT_APP_API + '/RPD/GenerateRPD', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(Rpd),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            // Создание URL для Blob
            var url = URL.createObjectURL(blob);

            // Создание ссылки для скачивания
            var link = document.createElement('a');
            link.href = url;
            link.download = 'example.docx';

            // Добавление ссылки на страницу и эмуляция клика для скачивания файла
            document.body.appendChild(link);
            link.click();

            // Очистка созданного URL
            URL.revokeObjectURL(url);

            // Удаление ссылки из DOM
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}