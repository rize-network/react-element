import { AppAnalytics } from 'src/utils/analytics';

export const onTouch = (onPress: Function, args: any, action?: string) => {
  if (onPress) {
    console.log('action', action);
    try {
      onPress();
      AppAnalytics.track('click', {
        action,
      });
    } catch (e) {
      console.warn(e);
    }
  }
};

// interface TouchableProps {
//   onPress?: void;
//   onClick?: void;
//   action: string;
//   children?: any;
// }

// export const Touchable = ({
//   onPress,
//   onClick,
//   action,
//   children,
//   ...props
// }: TouchableProps) => (
//   <StyledTouchable
//     {...props}
//     onClick={() =>
//       onPress
//         ? onTouch(onPress, action)
//         : onClick
//           ? onTouch(onClick, action)
//           : console.log('on press event is undefined')
//     }>
//     {children}
//   </StyledTouchable>
// );
