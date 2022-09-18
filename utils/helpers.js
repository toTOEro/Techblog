module.exports = {
    format_date: (date) => {
        let formattedDate = new Date(date)
        return `${formattedDate.toLocaleDateString()}`;
    },

    eq: (arg1, arg2) => {
        return arg1 === arg2;
    },
}