import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import styled from 'styled-components';

export const MenuAside = styled(Box)`
  width: 220px;
  background: rgb(110, 15, 7);
  height: 100%;
`;

export const UserTitle = styled.h2`
  font-size: 26px;
  font-weight: 900;
  color: white;
  padding: 16px 20px;
  padding-left: 16px;
  text-transform: capitalize;
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  padding: 16px;
  padding-bottom: 0.2em;
  display: flex;
  justify-content: space-between;
  color: rgb(227, 227, 227);
`;

export const HoverSpan = styled.span`
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ProjectName = styled(ListItem)`
  color: rgb(217, 217, 217) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

export const ProjectList = styled(List)`
  padding-top: 0 !important;
`;

export const ChannelListItem = styled(ListItem)`
  padding: 0 25px !important;
  color: rgb(163, 163, 163) !important;
  width: 100%;
  span {
    display: inline-box !important;
    width: 100% !important;
    a {
      display: block;
      width: 100%;
    }
  }
`;

// export const ListLinkText = styled.div`
//   display: inline-box !important;
//   width: 100% !important;
//   a {
//     width: 100%;
//   }
// `;
