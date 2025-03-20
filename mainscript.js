function fetchBursaries()
{
    document.getElementById('loading').style.display = 'flex'; // Show loading
    // Simulate fetching data
    setTimeout(() =>
    {
        // Your existing code to fetch and display bursaries
        document.getElementById('loading').style.display = 'none'; // Hide loading
    }, 2000); // Simulate a delay
}

function fetchUniversities()
{
    document.getElementById('loading').style.display = 'flex'; // Show loading
    // Simulate fetching data

    document.getElementById('fetch-bursaries').addEventListener('click', () =>
    {
        window.location.href = 'info.html?type=bursaries'; // Navigate to the info page for bursaries
    });

    document.getElementById('fetch-universities').addEventListener('click', () =>
    {
        window.location.href = 'info.html?type=universities'; // Navigate to the info page for universities
    });

    document.getElementById('about-us').addEventListener('click', openAboutModal);
    document.querySelector('.close').addEventListener('click', closeAboutModal);

    // Function to open the About Us modal
    function openAboutModal()
    {
        document.getElementById('about-modal').style.display = 'block';
    }

    // Function to close the About Us modal
    function closeAboutModal()
    {
        document.getElementById('about-modal').style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event)
    {
        const modal = document.getElementById('about-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
