This project implements a small reusable component library using **React**, **TypeScript**, and simple **CSS styling**.  
Components include:
alert box. user profile card and product display 

All components are typed strictly using TypeScript interfaces and demonstrate component composition, optional props, and reusable UI patterns.

1. AlertBox
A dismissible alert used for showing Success, Error, Warning, or Info messages.

Props:
ts
type AlertType = "success" | "error" | "warning" | "info";
interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

2. UserProfileCard

Displays user information, including avatar, name, email, and role.

Props:

interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}



3. ProductDisplay

Displays product details in a reusable card format.

Props:

interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}




Reflection Questions
How did you handle optional props in your components?
What considerations did you make when designing the component interfaces?
How did you ensure type safety across your components?
What challenges did you face when implementing component composition?''

1.For optional props I used "?" that is able to ensure that props can still be used if there is no value there

2. My biggest consideration for the component interface was reuseability so it can be used again in different places as well as strong typing with things like user and email and product.

3. Defining all typing helped ensure type safety especially while doing it in a dedicated type.ts file

4. A lot of challenges i faced were mostly with knowing everything i needed to define and also ensuring things worked together. another big problem was importing types, for some reason importing stuff worked only partially and it was very frustrating trying to figure out what was getting imported and exported and why certain things werent or were working.


