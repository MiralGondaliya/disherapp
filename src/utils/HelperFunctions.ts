// Function to get initials from a name
export const getInitials = (name: string) => {
  return name
    ?.split(' ')
    ?.map(part => part[0].toUpperCase())
    .join('');
};

// Function to get random background color for user badge
export const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
