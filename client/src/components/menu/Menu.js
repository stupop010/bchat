import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MenuAside, UserTitle } from './menuStyles';
import ProjectsList from './ProjectsList';
import ProjectsTitle from './ProjectsTitle';
import CreateProjectModal from '../modals/CreateProjectModal';
import { fetchProjects } from '../../store/actions/projects';

const Menu = ({ user }) => {
  if (!user) return null;
  const [modalChannelState, setModalChannelState] = useState(false);

  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const toggleChannelModal = () => {
    setModalChannelState(true);
  };

  const handleClose = () => {
    setModalChannelState(false);
  };

  return (
    <MenuAside component="aside">
      <UserTitle>{user.displayName || user.name}</UserTitle>
      <ProjectsTitle toggleChannelModal={toggleChannelModal} />
      <ProjectsList projects={projects} />
      <CreateProjectModal open={modalChannelState} onClose={handleClose} />
    </MenuAside>
  );
};

Menu.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Menu;
