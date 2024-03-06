import React, {useContext} from 'react';
import {PageContextProvider} from './usePageContext';
import type {PageContext} from 'vike/types';
import './PageShell.css';
import {Box, Text, Flex, Button} from '@chakra-ui/react';
import {AuthContext, AuthProvider, useAuth} from '#root/contexts/AuthContext';

export {PageShell};

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <AuthProvider>
          <Flex
            w="100%"
            h="100%"
            display="flex"
            flexDir={'column'}
            align="center"
            justify="center"
            p={4}
            bgGradient=" radial-gradient(gray.600, gray.800)"
          >
            <Flex direction="column" align="center" justify="center">
              {children}
            </Flex>
          </Flex>
        </AuthProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
