import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const USERS_API = `${REMOTE_SERVER}/api/users`;


export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
 };
 
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const deleteCourse = async (id: string) => {
    // First get all users enrolled in this course
    const enrolledUsers = await findUsersForCourse(id);
    
    // Unenroll each user from the course
    for (const user of enrolledUsers) {
        if (user._id) {
            await axiosWithCredentials.delete(`${USERS_API}/${user._id}/courses/${id}`);
        }
    }
    
    // Finally delete the course
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};


export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
  };

  export const findUserById
  = async (id: string) => {
    const response = await  axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/modules`,
      module
  );
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};
 