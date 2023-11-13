import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
	  @font-face {
        font-family: 'CustomMetExtraLight';
        src: local("CustomMetExtraLight") url("../assets/fonts/MetropolisExtraLight.otf") format('opentype');
      }
      
	  @font-face {
        font-family: 'CustomMetNormal';
        src: local("CustomMetNormal") url('../assets/fonts/MetropolisLight.otf') format('opentype');
      }
      `}
    />
);
