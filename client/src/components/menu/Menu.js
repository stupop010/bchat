import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MenuAside, UserTitle } from './menuStyles';
import ProjectsList from './ProjectsList';
import ProjectsTitle from './ProjectsTitle';
import CreateProjectModal from '../modals/CreateProjectModal';
import { fetchProjects } from '../../redux/actions/projects';

const Menu = ({ user }) => {
  if (!user) return null;
  const [modalState, setModalState] = useState(false);

  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projects);

  console.log(projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const toggleModal = () => {
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
  };

  return (
    <MenuAside component="aside">
      <UserTitle>{user.displayName || user.name}</UserTitle>
      <ProjectsTitle toggleModal={toggleModal} />
      <ProjectsList projects={projects} />
      <CreateProjectModal open={modalState} onClose={handleClose} />
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
