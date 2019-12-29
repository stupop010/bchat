import React, { useState } from 'react';
// import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import { ProjectList } from './menuStyles';
import CreateChannelModal from '../modals/CreateChannelModal';

const ProjectsList = ({ projects }) => {
  const [modalState, setModalState] = useState(false);
  const [targetProject, setProject] = useState({});

  const handleClose = () => {
    setProject({});
    setModalState(false);
  };

  const toggleModal = project => {
    setProject(project);
    setModalState(true);
  };

  const list = projects.map(project => {
    return (
      <ProjectItem
        key={project.id}
        project={project}
        toggleModal={toggleModal}
      />
    );
  });

  return (
    <ProjectList>
      {list}
      <CreateChannelModal
        open={modalState}
        onClose={handleClose}
        project={targetProject}
      />
    </ProjectList>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsList;
