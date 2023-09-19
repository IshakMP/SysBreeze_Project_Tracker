import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <AddClientModal />
      <AddProjectModal />
      <Projects />
      <Clients />
    </>
  );
}
