import React from 'react'
import "./HeaderIcons.css"
import {TbTruckDelivery} from 'react-icons/tb'
import {BsCreditCard2Back} from 'react-icons/bs'
import {GrLanguage} from 'react-icons/gr'
import {SlBasket} from 'react-icons/sl'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='header-icons-button'>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
const Icons = ({name,Icon})=>{
  return (
    <>
    <div className='header-icons-card' >
      <span className='span'>{<Icon/>}</span>
      
      <span>{name}</span>
    </div>
    
    </>
  )
}
export default function HeadeIcons() {
  return (
    <div className='header-cantainer'>
      <Icons name={"Tolov"} Icon={BsCreditCard2Back}/>
      <Icons name={"Tolov"} Icon={TbTruckDelivery}/>
      <Icons name={"O`zbekcha"} Icon={GrLanguage} lang={true}/>
      <Icons name={"Savacha"} Icon={SlBasket}/>
      <Icons name={"Sevimlilar"} Icon={FaRegHeart}/>
      <Icons name={"Kabinet"} Icon={AiOutlineUser}/>
      
    </div>
  )
}
