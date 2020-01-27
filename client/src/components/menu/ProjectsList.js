import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ProjectItem from './ProjectItem';
import { ProjectList } from './menuStyles';
import CreateChannelModal from '../modals/CreateChannelModal';
import AddUserProjectModal from '../modals/AddUserProjectModal';

const ProjectsList = ({ projects }) => {
  const [modalChannelState, setModalChannelState] = useState(false);
  const [modalAddUserState, setModalAddUserState] = useState(false);
  const [targetProject, setProject] = useState({});
  const userId = useSelector(state => state.user.id);
  console.log(userId);

  const handleChannelClose = () => {
    setProject({});
    setModalChannelState(false);
  };

  const toggleChannelModal = project => {
    setProject(project);
    setModalChannelState(true);
  };
  const handleAddUserClose = () => {
    setProject({});
    setModalAddUserState(false);
  };

  const toggleAddUserModal = project => {
    setProject(project);
    setModalAddUserState(true);
  };

  const list = projects.map(project => {
    return (
      <ProjectItem
        key={project.id}
        project={project}
        toggleChannelModal={toggleChannelModal}
        toggleAddUserModal={toggleAddUserModal}
      />
    );
  });

  return (
    <ProjectList>
      {list}
      <CreateChannelModal
        open={modalChannelState}
        onClose={handleChannelClose}
        project={targetProject}
        userId={userId}
      />
      <AddUserProjectModal
        open={modalAddUserState}
        onClose={handleAddUserClose}
        project={targetProject}
      />
    </ProjectList>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsList;
