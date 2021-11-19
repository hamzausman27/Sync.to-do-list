import React from 'react'
import {useState} from 'react'

const PopMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };
    return (
        <div>
             <div className={'col-md-6'}>
                    {tasks.length > 0 ?
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={handleClick}
                            className={'float-end'}
                        >
                            All Items
                        </Button>
                        : ''}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose1}>All</MenuItem>
                        <MenuItem onClick={()=>showUncompleted()}>Completed</MenuItem>
                        <MenuItem onClick={handleClose1}>Uncompleted</MenuItem>
                    </Menu>
                </div>
        </div>
    )
}

export default PopMenu
