export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* 2.6 Heading Tags */}

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>

      {/* 2.7 Paragraph Tags */}

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>

        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>

        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>

        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      {/* 2.8 List Tags */}
      {/* 2.8.1 Ordered List Elements */}

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make Brownies:
        <ol id="wd-brownies">
          <li>Prepare the ingredients.</li>
          <li>Preheat the oven.</li>
          <li>mix the ingredients</li>
          <li>add eggs to make it fluffy.</li>
          <li>Grease a pan and pour the batter.</li>
          <li>Bake the brownies.</li>
          <li>Cool the brownies.</li>
          <li>Serve with ice cream and enjoy!</li>
        </ol>

        How to make salad:
        <ol id="wd-your-favorite-recipe">
          <li>To assemble the salad, put the spinach, oranges, cucumber, onion, and walnuts in a large salad bowl.</li>
          <li>Cover and refrigerate until ready to serve (up to 12 hours).</li>
          <li>When dinner is ready, toss the salad gently to combine the ingredients.</li>
          <li>Allow everyone to top their own salad with black pepper and balsamic vinegar.</li>
        </ol>

        {/* 2.8.2 Unordered List Elements */}

        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>The Catcher in the Rye</li>
          <li>The Great Gatsby</li>
          <li>To Kill a Mockingbird</li>
          <li>Harry potter and the Sorcerer's Stone</li>
          <li>The fountain head</li>
        </ul>

        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>The Martians</li>
          <li>1979</li>
          <li>Game of Thrones : Song of Ice and Fire</li>
        </ul>
      </div>

      {/* 2.9 Table Tags */}

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>java</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>spring</td>
              <td>2/10/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>mvc</td>
              <td>2/17/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>python</td>
              <td>2/27/21</td>
              <td>96</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>JSP</td>
              <td>3/15/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>React</td>
              <td>3/28/21</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>API Integration</td>
              <td>4/12/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Dynamic content</td>
              <td>4/24/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Authentication</td>
              <td>5/10/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>MongoDB</td>
              <td>5/25/21</td>
              <td>96</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>92.6</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 2.10 Image Tag */}

      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id="wd-tom"
          width="400px"
          src="https://i.pinimg.com/originals/84/4a/5e/844a5e55833408d83c42ab3fdcbeb17e.jpg"
          alt="Tom "
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-peter" src="/images/petergriffin.jpeg" height="200px" alt="Peter Griffin from quohog" />
      </div>

      {/* 2.11 Form Tags */}
      {/* 2.11.1 Text fields */}

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="priyank" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" value="qwerty@#$asd" />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="priyank" /> <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="patel"
            value="patel" title="The last name" />

          {/* 2.11.2 Textareas */}

          <h5>Text boxes</h5>
          <label>Biography:</label><br />
          <textarea id="wd-textarea" cols={30} rows={10}>Eighteen years ago, on January 9, 2007, Steve Jobs unveiled the original iPhone at Macworld Expo in San Francisco. This groundbreaking device combined a mobile phone, an iPod, and an internet communicator into a single product, revolutionizing the tech industry and redefining mobile communication.
          </textarea>

          {/* 2.11.3 Buttons */}

          <h5 id="wd-buttons">Buttons</h5>
          <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello click me!
          </button>

          {/* 2.11.4 File upload button */}

          <h5>File upload</h5>
          <input id="wd-upload" type="file" />

          {/* 2.11.5 Radio buttons */}

          <h5 id="wd-radio-buttons">Radio buttons</h5>

          <label>Favorite movie :</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">incendies</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">whiplash</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">your name</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">harry potter and the half blood prince</label>

          {/* 2.11.6 Checkboxes */}

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

          {/* 2.11.7 Dropdowns */}

          <h4 id="wd-dropdowns">Dropdowns</h4>

          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
          <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          {/* 2.11.8 Other HTML field types */}

          <h4>Other HTML field types</h4>

          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input type="email"
            placeholder="priyankp@gmail.com"
            id="wd-text-fields-email" /><br />

          <label htmlFor="wd-text-fields-salary-start"> Starting salary:
          </label>
          <input type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000"
            value="100000" /><br />

          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range" id="wd-text-fields-rating"
            placeholder="Patel"
            max="5"
            value="4" /><br />

          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date"
            id="wd-text-fields-dob"
            value="2001-10-15" /><br />

          {/* 2.12 Anchor Tag */}

          <h4>Anchor tag</h4>
          Please &nbsp;
          <a id="wd-lipsum" href="https://www.apple.com">click here</a>
          &nbsp; to visit Apple<br />

          <a id="wd-github" href="https://www.github.com/priyank1510/kanbas-react-web-app" target="_blank" rel="noreferrer">Repository</a>
        </form>
      </div>
    </div>
  );
}