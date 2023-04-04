import MUIImageIcon from '@mui/icons-material/Image';
import { Box, Skeleton, styled } from '@mui/material';

export const ImageLoader = styled(Skeleton)(() => ({
  display: 'block',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
}));
ImageLoader.defaultProps = {
  variant: 'rectangular',
};

export const ImagePlaceholder = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
}));

export const ImageIcon = styled(MUIImageIcon)(() => ({
  fontSize: 72,
}));
