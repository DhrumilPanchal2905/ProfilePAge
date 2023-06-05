import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {FormControl, FormLabel,Typography, TextField, Button, Container, Tab, AppBar, Box, Card, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const [activeSection, setActiveSection] = React.useState(0); 
  const [showIELTS, setShowIELTS] = useState(false);
  const [showPTE, setShowPTE] = useState(false);

  const toggleIELTS = () => {
    setShowIELTS(!showIELTS);
  }

  const togglePTE = () => {
    setShowPTE(!showPTE);
  }


  const sections = ['Basic Details', 'Educational Details', 'Work Experience', 'Other Details'];

  return (
    <Container maxWidth="lg" sx={{}}> 
      <Card sx={{ my: 4, p: 3}}>
        <AppBar position="static">
          <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'divider' }}>
            <AppBar position="static" color="default">
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row' }
              }}>
                {sections.map((section, index) => (
                  <Tab
                    key={section}
                    label={section}
                    onClick={() => setActiveSection(index)}
                    sx={{ 
                      cursor: 'pointer', 
                      textDecoration: activeSection === index ? 'underline' : 'none',
                      mt: { xs: 1, sm: 0 }
                    }}
                  />
                ))}
              </Box>
            </AppBar>
          </Box>
        </AppBar>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              startIcon={<EditIcon />} 
              sx={{ mt: 3 }}
            >
              Edit
            </Button>
          </Box>
          <Grid container spacing={-1} sx={{ my: 4}} >
          {activeSection === 0 && (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={8}>
      <TextField {...register('Fname')} label="First Name" variant="outlined" margin="normal"  InputLabelProps={{ shrink: true }} sx={{ height: '40px' , width: '40%', }} required />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextField {...register('Lname')} label="Last Name" variant="outlined" margin="normal"  InputLabelProps={{ shrink: true }} sx={{ height: '40px', width: '40%'  }} required />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextField {...register('email')} label="Email" variant="outlined" margin="normal"  InputLabelProps={{ shrink: true }} sx={{ height: '40px', width: '40%' }} required />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextField {...register('gender')} label="Gender" variant="outlined" margin="normal"  InputLabelProps={{ shrink: true }} sx={{ height: '40px' , width: '40%' }} required />
    </Grid>
  </Grid>
)}

            {activeSection === 1 && (
              <Grid container spacing={3}>
                <>
      <Button onClick={toggleIELTS}>Toggle IELTS</Button>
      <Button onClick={togglePTE}>Toggle PTE</Button>

      {showIELTS && (
        <>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'flex-start' }}>IELTS Score</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSListening')} label="Listening" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSReading')} label="Reading" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSWriting')} label="Writing" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSSpeaking')} label="Speaking" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSOverall')} label="Overall" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
          </Grid>
          <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
        </>
      )}
    </>
    
    <>
      
      {showPTE && (
        <>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>PTE Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSListening')} label="Listening" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSReading')} label="Reading" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSWriting')} label="Writing" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Speaking" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSOverall')} label="Overall" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    </>
      )}
    </>
    
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>TOEFL Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSListening')} label="Listening" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSReading')} label="Reading" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSWriting')} label="Writing" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Speaking" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSOverall')} label="Overall" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>GMAT Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSListening')} label="Verbal" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSReading')} label="Quantitative " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSWriting')} label="IntegratedReasoning " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Analytical " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSOverall')} label="Total " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>GRE Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSListening')} label="Verbal" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSReading')} label="Quantitative " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Analytical " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSOverall')} label="Total " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
     <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>SSC Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSWriting')} label="Percentage " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Attempts " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Start Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="End Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>HSC Score</Typography>
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSWriting')} label="Percentage " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSSpeaking')} label="Attempts " variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Start Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="End Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
     <Grid item xs={12}>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6"  sx={{ display: 'flex', justifyContent: 'flex-start' }}>DUOLINGO Score</Typography>
    </Grid>

    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSOverall')} label="Overall" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="number" required />
    </Grid>
    <Grid item xs={12} sm={2}>
      <TextField {...register('IELTSExamDate')} label="Exam Date" variant="outlined" margin="normal" fullWidth InputLabelProps={{ shrink: true }} type="date" required />
    </Grid>
    </Grid>
            )}
            {activeSection === 2 && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField {...register('companyName')} label="Company Name" variant="outlined" margin="normal" sx={{ width: '80%', height: '60px' }}  required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField {...register('position')} label="Position" variant="outlined" margin="normal" sx={{ width: '80%', height: '60px' }}  required />
                </Grid>
              </>
            )}
            {activeSection === 3 && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField {...register('achievementLevel')} label="Achievement Level" variant="outlined" margin="normal" sx={{ width: '80%', height: '60px' }}  required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField {...register('backlog')} label="Backlog" variant="outlined" margin="normal" sx={{ width: '80%', height: '60px' }}  required />
                </Grid>
              </>
            )}
          </Grid>
          {/* <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>Submit</Button> */}
        </form>
      </Card>
    </Container>
  );
}

export default Profile;
