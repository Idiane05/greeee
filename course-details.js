$(document).ready(function () {
    // Get the course ID from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    // Fetch the course details from the mock API
    $.ajax({
        url: `http://localhost:5000/courses/${courseId}`,
        method: 'GET',
        success: function (course) {
            $.ajax({
                url: `http://localhost:5000/instructors/${course.instructorId}`,
                method: 'GET',
                success: function (instructor) {
                    const courseHtml = `
                        <h2>${course.title}</h2>
                        <p><strong>Instructor:</strong> ${instructor.name}</p>
                        <p><strong>Bio:</strong> ${instructor.bio}</p>
                        <p>${course.description}</p>
                        <h3>Learning Resources</h3>
                        <ul>
                            ${course.resources.map(function (resourceId) {
                                return `
                                    <li><a href="https://example.com/resource/${resourceId}">Resource ${resourceId}</a></li>
                                `;
                            }).join('')}
                        </ul>
                    `;
                    $('#courseDetails').html(courseHtml);
                }
            });
        },
        error: function () {
            $('#courseDetails').html('<p>Failed to load course details. Try again later.</p>');
        }
    });
});
