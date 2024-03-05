import {searchTempate, Critical, rpd} from "../interface/interface"

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

export const GetAllCriticalByCritical = async (critical: Critical) : Promise<Array<Critical>> => {
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