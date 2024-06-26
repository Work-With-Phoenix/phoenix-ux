
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
npm install phoenix-ux --save
# or
yarn add phoenix-ux
```

---

## Usage

### Magnetic Component

The `Magnetic` component creates an interactive magnetic effect around an element.

```jsx
import React from 'react';
import Magnetic from 'phoenix-ux';

const Example = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
    </div>
  );
};

export default Example;

```

### CountUp Component

The `CountUp` component animates a count-up effect from a start number to an end number.

```jsx
import React from 'react';
import CountUp  from 'phoenix-ux/src/app/components/CountUp';

const MyCounter = () => {
    return (
      <>
        <CountUp start={0} end={100} duration={3} />
        </>
    );
};

export default MyCounter;
```

### Button Component

The `Button` component provides various button styles and effects. You can use different button types such as `Swipe`, `Curtain`, or `Circle` by specifying them as children of the `Button` component.

```jsx
import React from 'react';
import Button  from 'phoenix-ux/src/app/Component/Button';

const MyComponent = () => {
    return (
       <>
        <Button.Shine title="Shine" />
              <Button.Center title="Center" />
              <Button.Dotted title="Dotted" />
              <Button.Curtain title="Curtain" />
              <Button.Circle title="Circle" />
              <Button.Hide title="Hide" />
              <Button.Swipe title="Swipe" />
              <Button.Smoosh title="Smoosh" />
              <Button.Slide title="Slide" />
              <Button.Skew title="Skew" />
       </>
    );
};

export default MyComponent;
```

### Entrance Animate

```jsx
import React from 'react';
import EntranceAnimation  from 'phoenix-ux/src/app/components/Animations/EntranceAnimation';

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
| separator | string   | ,        | The separator of the countup from a thousand. |

### Button Props

| Prop      | Type     | Default  | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| title     | string   |          | The title or label for the button.       |

## Animations

### Entrance Animation

This will allow users to import and use the `EntranceAnimation` component from our package in their projects.

| Name       | Type   | Default | Description                               |
|------------|--------|---------|-------------------------------------------|
| `children` | `ReactNode` | - | The content to animate.               |
| `duration` | `number`   | - | The duration of the animation in seconds. |
| `delay`    | `number`   | - | The delay before the animation starts in seconds. |
| `distance` | `number`   | - | The distance the content will animate from in pixels. |
| `direction`| `'left' | 'right' | 'up' | 'down'` | - | The direction from which the content will animate. |

### Typewriter animation

This will allow users to import and use the `Typewriter` component from our package in their projects.

### Typewiter Props

| Prop      | Type     | Default  | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| text      | string   |          | The text is a description for the effect  |

```jsx
import React from 'react';
import Typewriter  from 'phoenix-ux/src/app/components/Animations/Typewriter';

const Example = () => {
    return (
      <>
       <Typewriter text="Hello, World!" delay={100} className="text-red-500" cursorClassName="after:bg-red-500" />
        </>
    );
};

export default Example
```

---

## Configuration

Phoenix-UX components offer various configuration options to customize the behavior and appearance of the animations:

- **Duration**: Adjust the duration of the animations to control their speed.
- **Easing**: Choose from a range of easing functions to define the acceleration and deceleration of the animations.
- **Customization**: Customize the appearance and behavior of the components to match your project's design and branding.

By leveraging these configuration options, you can fine-tune the animations to create engaging and seamless user experiences tailored to your specific project requirements.

---

### Example 3: Animated Card

```jsx
import React from 'react';
import  Magnetic from 'phoenix-ux/src/app/component/Magnetic';

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

## Notes

There are more animations and components available and I will be updating them and making them available as soon as I am able to. I am also working on a more comprehensive documentation and AI-powered solutions to improve UI/UX development all round.

## Available Components

- Buttons
- CountUp
- Typewriter
- CookieModal (will update this)
- Drawers (Needs more work)
- Magnetic
- Tooltip
- Entrance Animation
- Marquee (slide animation - left and right)
- AOB

In the meantime, Let me know what you'd like to see or learn, contact me at: [info@phoenixui.cloud](mailto:info@phoenixui.cloud).

If you find this project helpful, consider buying me a ☕️ on :)

[![Buy Me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/phoenixinterface)

❤️ Phoenix interface