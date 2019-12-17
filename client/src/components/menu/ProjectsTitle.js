import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectTitle, HoverSpan } from './menuStyles';

const Projects = ({ toggleModal }) => {
  return (
    <div>
      <ProjectTitle>
        Projects
        <HoverSpan>
          <FontAwesomeIcon icon="plus" size="1x" onClick={toggleModal} />
        </HoverSpan>
      </ProjectTitle>
    </div>
  );
};

Projects.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Projects;
