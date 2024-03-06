export interface searchTempate {
    faculty?: string;
    specialtyNumber?: string;
    groupName?: string;
    name?: string;
    numberOfDepartament?: string;
    typeOfControl?: string;
    formaObuchenua?: string;
    countOfHourLecture?: string;
    countOfHourPractice?: string;
    countOfHourLab?: string;
    countOfHourCourseProject?: string;
    countOfHourCourseWork?: string
}
export interface Critical {
    faculty?: string,
    fo?:string,
    specialtyNumber?: string,
    spz?: string,
    groupName?: string,
    name?: string,
    numberOfDepartament?: string,
    countOfHourLecture?: string,
    countOfHourPractice?: string,
    countOfHourLab?: string,
    countOfHourCourseProject?: string,
    countOfHourCourseWork?: string,
    srs?: string,
    examHours?: string,
    typeOfCourseProject?: string,
    typeOfControl?: string,
}
export interface rpdinfo{
   
	CharacteristicsOfTheSubjectArea :string
	LearningGoals :string
	RequaredOrNotRequiared :string
}
export interface rpd{
    criticalInfo: Critical,
    rpdInfo: rpdinfo
}