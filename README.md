
# Phoenix-UX

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
import { Magnetic } from 'phoenix-ux';

const MyComponent = () => {
    return (
        <Magnetic>
            {/* Your content here */}
        </Magnetic>
    );
};

export default MyComponent;
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
- Add any other acknowledgements or credits as needed.
