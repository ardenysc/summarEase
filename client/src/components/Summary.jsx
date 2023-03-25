import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { StylesProvider } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ChipsArray from '../components/ChipsArray';
import BasicModal from "./BasicModal";
import './Summary.css'
import { format } from 'date-fns'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSummary } from '../redux/actions';
import { fontSize } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Summary = ({ summary }) => {
    const dispatch = useDispatch();

    // var formattedDate = summary.createdAt;
    var datestring = summary.createdAt.split('T')[0];
    var dates = datestring.split('-');
    var formattedDate = dates.slice(0,3).join('/');


    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const [showModal,setShowModal] = useState(false);
    
    function showModalHandler() {
        setShowModal(!showModal);
    }


  return (
    <React.Fragment>
        <li className='listItem'>
            <Accordion 
                className='Accordion' 
                expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')}
                sx={{
                    padding:1,
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="accordionSummary"
                    sx={{
                        // color:'red',
                        // bgcolor: 'blue'
                      }}
                >
                    <Typography
                        sx={{
                            mr:2,
                            fontSize:12
                        }}
                    >
                        {(new Date(summary.createdAt)).toDateString()}
                        {/* {format(formattedDate, 'dd/mm/yyyy')} */}
                        {/* {formattedDate} */}
                    </Typography>
                    <Typography 
                        sx={{ width: '33%', flexShrink: 0 }}
                        className="Typography"
                        align='left'
                    >
                        {summary?.title}
                    </Typography>
                    <ChipsArray  data={summary.keywords} id={summary._id}/>
                </AccordionSummary>
                <AccordionDetails align='left'>
                    <Button 
                        variant="outlined" 
                        href={summary?.url}
                        sx={{
                            mb:1,
                            color: 'black',
                            borderColor: 'black',
                            boxShadow: 1
                        }}
                    >
                        Go to Page
                    </Button>
                    {/* <Link 
                        href={summary?.url}
                    >
                        Link
                    </Link> */}
                    <Typography align='left'>
                        {summary?.text}
                    </Typography>
                        <span className="icon" onClick={() => dispatch(deleteSummary(summary._id))}>
                            {/* <i className="fas fa-trash" /> */}
                            <DeleteOutlineOutlinedIcon />
                            
                        </span>
                        <span className="icon" onClick={showModalHandler}>
                            {/* <i className="fas fa-pen" /> */}
                            <EditOutlinedIcon />
                        </span>
                        {showModal ? <BasicModal open={showModal} id={summary._id} title={summary.title} text={summary.text} />: null }

                </AccordionDetails>
            </Accordion>
        </li>
    </React.Fragment>
    
  )
}

export default Summary;