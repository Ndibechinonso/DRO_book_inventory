export const formatDate = (date: string, mode = 1,) => {
    if (!date) return
      const dateArray = new Date(date).toDateString().split(" ");
      const timeString = new Date(date).toTimeString().substring(0, 8);
      return (
        (dateArray[2].length < 2 ? `0${dateArray[2]}` : dateArray[2]) +
        "/" +
        dateArray[1] +
        "/" +
        dateArray[3]
      )
  };