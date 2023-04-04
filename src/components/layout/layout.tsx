import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useRoute } from 'hooks';

import { HeadingProps, PageProps } from './layout.interface';
import { HeadingWrapper, PageLayout } from './layout.styled';

export function Heading({ children, actionBar }: HeadingProps) {
  const {
    route: { name },
  } = useRoute();

  return (
    <HeadingWrapper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Grid item>
          <Typography variant="h1">{children || name}</Typography>
        </Grid>
        {actionBar && <Grid item>{actionBar}</Grid>}
      </Grid>
    </HeadingWrapper>
  );
}

export function Page({ children, actionBar, withHeading = false }: PageProps) {
  useEffect(() => {
    const scrollWrapper = document.getElementById('scroller-wrapper');
    if (scrollWrapper) {
      scrollWrapper.scrollTop = 0;
    }
  }, []);

  return (
    <PageLayout>
      <Container>
        {withHeading && <Heading actionBar={actionBar} />}
        {children}
      </Container>
    </PageLayout>
  );
}
