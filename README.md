
# Phoenix-UX

  ![Phoenix-UX Logo](https://res.cloudinary.com/dydhh0fyd/image/upload/v1713876687/phoenix/phoenix-ux/logo-small_hkx9ed.svg)

Phoenix-UX is a collection of reusable components for creating stunning UX animations, powered by GSAP (GreenSock Animation Platform). It provides easy integration with popular frameworks like Next.js and offers customizable, responsive components to elevate the user experience of your web applications.

---

## Features

- **Component-Based**: Easily incorporate interactive animations into your web applications with reusable components.
- **Powered by GSAP**: Utilizes the power and flexibility of GSAP for smooth and performant animations.
- **Framework Compatibility**: Seamlessly integrates with frameworks like Next.js for rapid development.
- **Customizable**: Tailor animation properties and behaviors to match your project's design and branding.
- **Responsive**: Ensures animations look great across various screen sizes and devices.

---

## Installation

You can install Phoenix-UX via npm or yarn:

```bash
npm install phoenix-ux
# or
yarn add phoenix-ux
```

---

## Usage

### Magnetic Component

The `Magnetic` component creates an interactive magnetic effect around an element.

```tsx
import React from 'react';
import CountUp from './CountUp';

const Example = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <CountUp start={0} end={100} duration={2} />
    </div>
  );
};

export default Example;

```

### CountUp Component

The `CountUp` component animates a count-up effect from a start number to an end number.

```tsx
import React from 'react';
import { CountUp } from 'phoenix-ux';

const MyCounter = () => {
    return (
        <CountUp start={0} end={100} duration={3} />
    );
};

export default MyCounter;
```

### Button Component

The `Button` component provides various button styles and effects. You can use different button types such as `Swipe`, `Curtain`, or `Circle` by specifying them as children of the `Button` component.

```tsx
import React from 'react';
import { Button } from 'phoenix-ux';

const MyComponent = () => {
    return (
        <Button.Swipe title="Swipe Button" />
    );
};

export default MyComponent;
```

### Entrance Animate

```tsx
import React from 'react';
import { EntranceAnimation } from 'phoenix-ux';

const Example = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="up">
        <p className="text-lg">This text will animate in from below when it comes into view.</p>
      </EntranceAnimation>
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="down">
        <p className="text-lg">And this text will animate in from above.</p>
      </EntranceAnimation>
    </div>
  );
};

export default Example;

```
---

## Props

### Magnetic Props

| Prop      | Type     | Default  | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| [None]    |          |          | The Magnetic component does not accept any props. |

### CountUp Props

| Prop      | Type     | Default  | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| start     | number   |          | The starting number for the count-up animation. |
| end       | number   |          | The target number to count up to.        |
| duration  | number   | 3        | The duration of the count-up animation in seconds. |

### Button Props

| Prop      | Type     | Default  | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| title     | string   |          | The title or label for the button.       |

## Animations

### Entrance Animation

This will allow users to import and use the `EntranceAnimation` component from your package in their projects.

| Name       | Type   | Default | Description                               |
|------------|--------|---------|-------------------------------------------|
| `children` | `ReactNode` | - | The content to animate.               |
| `duration` | `number`   | - | The duration of the animation in seconds. |
| `delay`    | `number`   | - | The delay before the animation starts in seconds. |
| `distance` | `number`   | - | The distance the content will animate from in pixels. |
| `direction`| `'left' | 'right' | 'up' | 'down'` | - | The direction from which the content will animate. |

---

## Configuration

Phoenix-UX components offer various configuration options to customize the behavior and appearance of the animations:

- **Duration**: Adjust the duration of the animations to control their speed.
- **Easing**: Choose from a range of easing functions to define the acceleration and deceleration of the animations.
- **Customization**: Customize the appearance and behavior of the components to match your project's design and branding.

By leveraging these configuration options, you can fine-tune the animations to create engaging and seamless user experiences tailored to your specific project requirements.

---

### Example 3: Animated Card

```tsx
import React from 'react';
import { Magnetic } from 'phoenix-ux';

const AnimatedCard = () => {
  return (
    <div className="card">
      <Magnetic>
        <img src="card-image.jpg" alt="Card Image" />
        <h2>Title</h2>
        <p>Description</p>
      </Magnetic>
    </div>
  );
};

export default AnimatedCard;
```

---

## Contributing

We welcome contributions from the community! If you have ideas for improvements or new features, please open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [GSAP](https://greensock.com/) for providing a powerful animation library.
- The hover effects for our buttons were inspired by the work of [Shrihari](https://tailwindcomponents.com/u/shrihari) on [Tailwind Components](https://tailwindcomponents.com/component/button-hover-effects). We appreciate their creativity and contribution to the web development community.
