import React, { useState ,useEffect  } from "react";
import "./DataTable.css";


const tags = "Technology, Fashion, Food, Travel, Sports, Music, Art, Health, Education, Finance";

const links = [
  "https://timesonline.co.uk",
  "https://merriam-webster.com",
  "https://newyorker.com",
  "https://angelfire.com",
  "https://rambler.ru",
  "https://timesonline.co.uk",
  "https://state.gov",
  "https://youtube.com",
  "https://washingtonpost.com",
  "https://icq.com",
  "https://cbsnews.com",
  "https://google.pl",
  "https://uiuc.edu",
  "https://creativecommons.org",
  "https://cam.ac.uk",
  "https://microsoft.com",
  "https://ebay.co.uk",
  "https://ucsd.edu",
  "https://constantcontact.com",
  "https://seesaa.net",
  "https://globo.com",
  "https://github.io",
  "https://bluehost.com",
  "https://engadget.com",
  "https://psu.edu",
  "https://canalblog.com",
  "https://pen.io",
  "https://parallels.com",
  "https://skyrock.com",
  "https://fastcompany.com",
  "https://4shared.com",
  "https://unc.edu",
  "https://irs.gov",
  "https://apache.org",
  "https://deliciousdays.com",
  "https://smugmug.com",
  "https://list-manage.com",
  "https://icio.us",
  "https://webeden.co.uk",
  "https://howstuffworks.com"
];

const prefixes = [
  "QB0GaK7", "8oUTDyz", "Z9i2o9o", "pW44f49", "w1vDJvP", "Uz3Uq87", "PwT2wMc", "c1TO1x6", "4KtfXaU", "nh294Ty",
  "0e56PW3", "NNq9FXo", "55b5FKK", "0Q43Q2J", "1dYVlCo", "5leG2TS", "2tYI62f", "Dfdk2F4", "6OFdyTY", "IYU6iyo",
  "9Q8j9h5", "5e7TzC8", "8Je0tSH", "9S74C00", "38yv9fT", "w6WNGwa", "4RW1EV6", "llpTUMe", "rdv8kZ3", "7zIf8YB",
  "3y72wJ1", "x92LK5J", "fvD4yQu", "7d46u5g", "04Gwoph", "Z8NZ9t6", "SeVM7Vy", "HO3p8A4", "5dndeO4", "NkEas9V"
];

const DataTable = ({ show }) => {
  const [selectedTags, setSelectedTags] = useState(Array(links.length).fill([]));

  useEffect(() => {
    console.log("DataTable show prop:", show);
  }, [show]);

  const handleTagChange = (index, event) => {
    const newSelectedTags = [...selectedTags];
    newSelectedTags[index] = [...selectedTags[index], event.target.value];
    setSelectedTags(newSelectedTags);
  };

  const handleTagDelete = (linkIndex, tagIndex) => {
    const newSelectedTags = [...selectedTags];
    newSelectedTags[linkIndex].splice(tagIndex, 1);
    setSelectedTags(newSelectedTags);
  };

  const formatSiNo = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="table-container">
          <h2>Uploads</h2>
          <div className="wrap">
            <table>
              <thead>
                <tr>
                  <th>SI No.</th>
                  <th>Links</th>
                  <th>Prefix</th>
                  <th>Add Tags</th>
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, linkIndex) => (
                  <tr key={linkIndex}>
                    <td>{formatSiNo(linkIndex + 1)}</td>
                    <td><a href={link} target="_blank" rel="noopener noreferrer">{link.replace(/(^\w+:|^)\/\//, '')}</a></td>
                    <td>{prefixes[linkIndex]}</td>
                    <td>
                      <select
                        value=""
                        onChange={(event) => handleTagChange(linkIndex, event)}
                      >
                        <option value="">Select Tags</option>
                        {tags.split(", ").map((tag, tagIndex) => (
                          <option key={tagIndex} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      {selectedTags[linkIndex].map((tag, tagIndex) => (
                        <span key={tagIndex}>
                          {tag}
                          <button onClick={() => handleTagDelete(linkIndex, tagIndex)}>&times;</button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default DataTable;
