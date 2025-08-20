import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import ImageIcon from '@mui/icons-material/Image';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MoneyIcon from '@mui/icons-material/Money';

const Home = () => {
    const [counts, setCounts] = useState({ totalCategories: 0, totalProducts: 0 , totalPortfolio: 0, totalReviews: 0});
     
    useEffect(() => {
    axios.get("http://localhost:3000/stats/counts")
    .then((res) => {
      setCounts(res.data);
    })
    .catch((err) => console.error("Error fetching counts:", err));
}, []);

  return (
    <div>
        <Grid container className='active_count' spacing={3}>
            <Grid size={3}>
                <Box>
                    <ul>
                        <li>
                            <label>ACTIVE CATEGORIES</label>
                            <p>{counts.totalCategories}</p>
                        </li>
                        <li>
                            <AppsIcon />
                        </li>
                    </ul>
                </Box>
            </Grid>
            <Grid size={3}>
                <Box>
                    <ul>
                        <li>
                            <label>ACTIVE PRODUCTS</label>
                            <p>{counts.totalProducts}</p>
                        </li>
                        <li>
                            <MoneyIcon />
                        </li>
                    </ul>
                </Box>
            </Grid>
            <Grid size={3}>
                <Box>
                    <ul>
                        <li>
                            <label>PORTFOLIO ITEMS</label>
                            <p>{counts.totalPortfolio}</p>
                        </li>
                        <li>
                            <ImageIcon />
                        </li>
                    </ul>
                </Box>
            </Grid>
            <Grid size={3}>
                <Box>
                    <ul>
                        <li>
                            <label>TOTAL REVIEWS</label>
                            <p>{counts.totalReviews}</p>
                        </li>
                        <li>
                            <ReviewsIcon />
                        </li>
                    </ul>
                </Box>
            </Grid>
        </Grid>  
    </div>
  )
}

export default Home
