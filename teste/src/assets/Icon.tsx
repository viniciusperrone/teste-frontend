import { useTheme } from '../hooks/useTheme';

export function Icon() {
  const { theme } = useTheme();

  return (
    <svg
      fill={theme ? '#DBB68F' : '#A97237'}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 1000 1000"
    >
      <path d="M491.3 926.6c-45.7.4-86.8 9.6-128 18.3-39.3 8.3-78.4 16.9-119 16.8-86.2-.3-135.1-78.1-108.8-155.3 15.7-46.2 44.1-83.9 80.2-115.7 30.8-27.1 62.5-53.2 87.5-86.1 18.6-24.5 36.2-49.8 54.2-74.7 17.6-24.5 35.4-48.9 59-68.1 41.4-33.7 87.9-44 139-27.8 25.9 8.2 45.7 25.9 60.6 48 14.9 22 27.7 45.4 41.3 68.3 34 57.5 74.8 109.6 123.6 155 33.5 31.2 60.1 66.5 70.2 112.3 6 27.4 4.1 54.2-6.3 80.5-16.6 42.2-47.1 64.1-92.3 65.1-34.4.8-67.7-6.3-101.3-12.2-46.7-8.2-93.5-15.8-140.4-23.3-7.4-1.2-15.2-.9-19.5-1.1M800 196.7c-1.7 53.8-17.2 104.7-54 147.8-13.2 15.5-28.9 28-47.3 36.8-43.2 20.7-90 10.9-121.3-25.6-26.6-31-38-68-39.7-108.2-2.6-62.2 13.9-118.3 55.3-165.5 22-25.1 49-42.6 82.9-45 43.7-3.1 74.9 18.5 97.4 54.5 19.5 31.4 26.3 66.4 26.7 105.2M463.6 242.6c-.7 39.2-7.8 73.5-27.1 104.3-36.3 57.8-101.4 70.6-156.1 30.1-41.7-30.8-64.1-74.1-74.5-124-9.2-44.1-7.2-87.7 11.2-129.4 14.6-33 36.8-59 72.4-69.3 41.8-12.1 77.4 2.3 107.9 30.6 39.1 36.2 58.1 82.7 64.5 135.1 1 8.5 1.3 17.2 1.7 22.6M990 460.4c-3 55.8-24.7 110-74.5 150.3-24.3 19.7-52.2 30.4-83.8 23.3-37.9-8.5-57.3-36.3-67.3-71.7-20.3-72.3 15-166.3 77.3-207.6 21.5-14.2 44.8-22.2 70.6-18.1 30.5 4.8 50.8 23.8 64 51.1 9.9 20.6 13.5 42.7 13.7 72.7M241.4 519.3c-.2 24.1-4.2 47.3-15.5 68.8-22.6 42.9-66.9 59.1-111.3 40.3-37-15.7-62.5-43.8-80.3-79.1C10 501.1 1.2 450.7 20.5 398.5c12.6-34.1 36.4-56.5 73.8-59.9 26.3-2.4 49.6 7.1 70.2 22.9 44.6 34.1 67.7 80.7 75.4 135.7.7 5.1 1.1 10.2 1.4 15.4.3 2.2.1 4.5.1 6.7"></path>
    </svg>
  );
}

// #DBB68F
// #8B5D2D
