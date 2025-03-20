// Sample data for bursaries and universities
const bursaryData =
    [
    { name: "Bursary A", link: "https://example.com/bursary-a", description: "This bursary is for students pursuing a degree in Engineering." },
    { name: "Bursary B", link: "https://example.com/bursary-b", description: "This bursary supports students in the fields of Science and Technology." },
    { name: "Bursary C", link: "https://example.com/bursary-c", description: "This bursary is available for students studying Arts and Humanities." }
];

const universityData =
    [
    { name: "University A", link: "https://example.com/university-a", description: "University A offers a wide range of undergraduate and postgraduate programs." },
    { name: "University B", link: "https://example.com/university-b", description: "University B is known for its research facilities and academic excellence." },
    { name: "University C", link: "https://example.com/university-c", description: "University C provides a vibrant campus life and diverse study options." },
    { name: "University of Mike",link: "https://UniMike.com/university-mike",description: "Universiy of Mike landing "}
];

// Function to populate the bursary and university information
function populateInfo()
{
    const bursaryList = document.getElementById('bursary-items');
    const universityList = document.getElementById('university-items');

    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    if (type === 'bursaries')
    {
        bursaryData.forEach(bursary =>
        {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${bursary.link}" target="_blank">${bursary.name}</a><br>${bursary.description}`;
            bursaryList.appendChild(li);
        });
    } else if (type === 'universities')
    {
        universityData.forEach(university =>
        {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${university.link}" target="_blank">${university.name}</a><br>${university.description}`;
            universityList.appendChild(li);
        });
    }
}

// Function to go back to the previous page
function goBack()
{
    window.history.back();
}

// Populate the information when the page loads
window.onload = populateInfo;
