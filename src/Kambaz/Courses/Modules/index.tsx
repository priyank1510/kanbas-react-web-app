import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";

import {  useState,useEffect } from "react";
import { setModules  ,addModule, editModule,
  updateModule, deleteModule }
from "./reducer";
import * as courseClient from "../client";
import * as modulesClient from "./client";
import { useSelector, useDispatch }
from "react-redux";
import ProtectedContent from "../../Account/ProtectedContent";
export default function Modules() {
 const {cid}= useParams();

 const  [moduleName, setModuleName] = useState("");
 const { modules } = useSelector(
  (state: any) => state.modulesReducer);
const dispatch = useDispatch();



const addModuleHandler = async () => {
  const newModule = await courseClient.createModuleForCourse(cid!, {
    name: moduleName,
    course: cid,
  });
  dispatch(addModule(newModule));
  setModuleName("");
};

const deleteModuleHandler = async (moduleId: string) => {
  await modulesClient.deleteModule(moduleId);
  dispatch(deleteModule(moduleId));
};





const fetchModulesForCourse = async () => {
  const modules = await courseClient.findModulesForCourse(cid!);
  dispatch(setModules(modules));
};
useEffect(() => {
  fetchModulesForCourse();
}, [cid]);


    



  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
 


 return (
      <div>
       <ModulesControls  moduleName={moduleName} setModuleName={setModuleName}  addModule={addModuleHandler}/>
      
       <br /><br /><br /><br />
        <ListGroup className=" rounded -0">
        {modules.map((module:any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">  {!module.editing && module.name}
            <ProtectedContent allowedRoles={["FACULTY"]}>
  { module.editing && (<input value={module.name}
    className="form-control w-50 d-inline-block" 
    onChange={(e) => updateModuleHandler({ ...module, name: e.target.value })}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        updateModuleHandler({ ...module, editing: false });
      }
    }} />

  )}<ModuleControlButtons moduleId={module._id}
  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}  editModule={(moduleId) => dispatch(editModule(moduleId))} /></ProtectedContent></div>
            {module.lessons && (
             <ListGroup className="wd-lessons rounded-0">
             {module.lessons.map((lesson:any) => (
               <ListGroup.Item className="wd-lesson p-3 ps-1"> 
                 <BsGripVertical className="me-2 fs-3" />{lesson.name}<LessonControlButtons/>
               </ListGroup.Item>
              ))}
             </ListGroup>
            )}
          </ListGroup.Item>
        ))}    
        </ListGroup>
      </div>
  );}
  