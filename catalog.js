$(document).ready(function () {
    // Fetch the list of courses from the mock API
    $.ajax({
        url: 'http://localhost:5000/courses',
        method: 'GET',
        success: function (courses) {
            // Loop through each course and display it in the course list
            courses.forEach(function (course) {
                const courseHtml = `
                    <div class="course">
                        <h3><a href="course-details.html?id=${course.id}">${course.title}</a></h3>
                        <p>${course.description}</p>
                    </div>
                `;
                $('#courseList').append(courseHtml);
            });
        },
        error: function () {
            $('#courseList').html('<p>Failed to load courses. Try again later.</p>');
        }
    });
});
