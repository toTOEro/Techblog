module.exports = {
    format_date: (date) => {
        let formattedDate = new Date(date)
        return `${formattedDate.toLocaleDateString()}`;
    }

}