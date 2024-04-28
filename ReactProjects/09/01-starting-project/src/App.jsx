import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  })

  const handleAddTask = (text) => {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newtask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId
      };
      return{
        ...prevState,
        tasks:[newtask, ...prevState.tasks]
      };
    })
  }
  const handleDeleteTask = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        )
      };
    })
  }
  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject)
      };
    })
  }
  const handleSelectProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id,
      };
    })
  }
  const handleStartAddProject = () =>{
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null,
        
      };
    })
  };
  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        
      };
    })
  }
  const handleAddProject = (projectData) => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  };

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)
  let content = (<SelectedProject 
                  project={selectedProject} 
                  onDelete={handleDeleteProject} 
                  onAddTask={handleAddTask} 
                  onDeleteTask={handleDeleteTask}
                   tasks={projectsState.tasks}
                  />
                );

  if(projectsState.selectedProject === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectsState.selectedProject === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProject}/>
      {content}
    </main>
  );
}

export default App;
