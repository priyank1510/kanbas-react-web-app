import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async (moduleId: string) => {
    try {
        const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
        if (response.status !== 200) {
            throw new Error(`Failed to delete module: ${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        console.error("Error in deleteModule:", error);
        throw error;
    }
};

export const updateModule = async (module: any) => {
    try {
        const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
        return data;
    } catch (error) {
        console.error("Error in updateModule:", error);
        throw error;
    }
};