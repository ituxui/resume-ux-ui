import { technologiesIObserveData } from "@shared/data";
import { BubbleWrapItem, MarqueePanel } from "@shared/ui";
import { useEffect, useState } from "react";

const getValuesBasedOnWidth = () => {
  if (window.innerWidth < 840) {
    return [10, 5];
  }
  return [8, 3, 12];
};

export const MarqueePanelSection = () => {
  const [values, setValues] = useState(getValuesBasedOnWidth());

  useEffect(() => {
    const handleResize = () => {
      setValues(getValuesBasedOnWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <MarqueePanel speeds={values} direction='left'>
    {technologiesIObserveData.map((category) =>
      category.items.map((item) => (
        <BubbleWrapItem key={item.title} url={item.url}>
          {item.title}
        </BubbleWrapItem>
      ))
    )}
  </MarqueePanel>
};







{/* <BubbleWrapItem url='https://animejs.com/'>
Anime.js
</BubbleWrapItem>
<BubbleWrapItem url='https://nextjs.org/'>
Next
</BubbleWrapItem>
<BubbleWrapItem url='https://sass-lang.com/'>
SCSS
</BubbleWrapItem>
<BubbleWrapItem url='https://zustand-demo.pmnd.rs/'>
Zustand
</BubbleWrapItem>
<BubbleWrapItem url='https://redux.js.org/'>
Redux
</BubbleWrapItem>
<BubbleWrapItem url='https://threejs.org/'>
Three.js
</BubbleWrapItem>
<BubbleWrapItem url='https://www.mysql.com/'>
MySQL
</BubbleWrapItem>
<BubbleWrapItem url='https://git-scm.com/'>
Git
</BubbleWrapItem>
<BubbleWrapItem url='https://vitejs.dev/'>
Vite
</BubbleWrapItem>
<BubbleWrapItem url='https://nodejs.org/en'>
Nodejs
</BubbleWrapItem>
<BubbleWrapItem url='https://styled-components.com/'>
Styled Components
</BubbleWrapItem>
<BubbleWrapItem url='https://socket.io/'>
SocketIO
</BubbleWrapItem>
<BubbleWrapItem url='https://mongoosejs.com/'>
Mongoose
</BubbleWrapItem>
<BubbleWrapItem url='https://www.docker.com/'>
Docker
</BubbleWrapItem>
<BubbleWrapItem url='https://gsap.com/'>
GSAP
</BubbleWrapItem>
<BubbleWrapItem url='https://developer.mozilla.org/en-US/docs/Web/HTML'>
HTML
</BubbleWrapItem>
<BubbleWrapItem url='https://www.prisma.io/'>
Prisma
</BubbleWrapItem>
<BubbleWrapItem url='https://formik.org/'>
Formik
</BubbleWrapItem>
<BubbleWrapItem url='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'>
Canvas
</BubbleWrapItem>
<BubbleWrapItem url='https://react-hook-form.com/'>
React Hook Form
</BubbleWrapItem>
<BubbleWrapItem url='https://www.npmjs.com/'>
npm
</BubbleWrapItem>
<BubbleWrapItem url='https://zod.dev/'>
Zod
</BubbleWrapItem>
<BubbleWrapItem url='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
JS
</BubbleWrapItem>
<BubbleWrapItem url='https://developer.mozilla.org/en-US/docs/Web/API'>
Web API
</BubbleWrapItem>
<BubbleWrapItem url='https://tailwindcss.com/'>
TailwindCSS
</BubbleWrapItem>
<BubbleWrapItem url='https://tanstack.com/query/latest'>
Tanstack Query
</BubbleWrapItem>
<BubbleWrapItem url='https://www.typescriptlang.org/'>
Typescript
</BubbleWrapItem>
<BubbleWrapItem url='https://react.dev/'>
React
</BubbleWrapItem>
<BubbleWrapItem url='https://expressjs.com/'>
Express.js
</BubbleWrapItem>
<BubbleWrapItem url='https://valtio.dev'>
Valtio
</BubbleWrapItem>
<BubbleWrapItem url='https://www.mongodb.com/'>
Mongodb
</BubbleWrapItem>
<BubbleWrapItem url='https://floating-ui.com/'>
Floating UI
</BubbleWrapItem>
<BubbleWrapItem url='https://jestjs.io/'>
Jest
</BubbleWrapItem>
<BubbleWrapItem url='https://developer.mozilla.org/en-US/docs/Web/CSS'>
CSS
</BubbleWrapItem>
<BubbleWrapItem url='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>
React Three Fiber
</BubbleWrapItem>
<BubbleWrapItem url='https://yarnpkg.com/'>
Yarn
</BubbleWrapItem>
<BubbleWrapItem url='https://svelte.dev/'>
Svelte
</BubbleWrapItem>

<BubbleWrapItem url='https://storybook.js.org/'>
Storybook
</BubbleWrapItem>

<BubbleWrapItem url='https://nginx.org/'>
Nginx
</BubbleWrapItem>


<BubbleWrapItem url='https://vuejs.org/'>
Vue.js
</BubbleWrapItem>

<BubbleWrapItem url='https://webpack.js.org/'>
Webpack
</BubbleWrapItem>

<BubbleWrapItem url='https://trpc.io/'>
tRPC
</BubbleWrapItem>

<BubbleWrapItem url='https://graphql.org/'>
GraphQL
</BubbleWrapItem>

<BubbleWrapItem url='https://eslint.org/'>
ESLint
</BubbleWrapItem>

<BubbleWrapItem url='https://babeljs.io/'>
Babel
</BubbleWrapItem>

<BubbleWrapItem url='https://mui.com/'>
Material UI
</BubbleWrapItem>

<BubbleWrapItem url='https://chakra-ui.com/'>
Chakra UI
</BubbleWrapItem>

<BubbleWrapItem url='https://www.framer.com/motion/'>
Framer Motion
</BubbleWrapItem> */}
