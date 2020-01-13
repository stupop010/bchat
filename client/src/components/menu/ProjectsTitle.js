import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProjectTitle, HoverSpan } from './menuStyles';

const Projects = ({ toggleChannelModal }) => (
  <div>
    <ProjectTitle>
      Projects
      <HoverSpan>
        <FontAwesomeIcon icon="plus" size="1x" onClick={toggleChannelModal} />
      </HoverSpan>
    </ProjectTitle>
  </div>
);

Projects.propTypes = {
  toggleChannelModal: PropTypes.func.isRequired,
};

export default Projects;
