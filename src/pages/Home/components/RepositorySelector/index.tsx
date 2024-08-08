import * as React from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { defaultTheme } from '../../../../styles/themes/default'
import { UserContext } from '../../../../contexts/UserContext'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 10
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
}

function getStyles(name: string, repositoryName: string, theme: Theme) {
  return {
    fontWeight:
      repositoryName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  }
}

export default function RepositorySelection() {
  const theme = useTheme()
  const [repositoryName, setRepositoryName] = React.useState<string>('')

  const { repositoriesNameList, handleChangeRepository } =
    React.useContext(UserContext)

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setRepositoryName(value)
    handleChangeRepository(value)
    localStorage.setItem('repository', JSON.stringify(value))
  }

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 200,
          backgroundColor: defaultTheme.colors['base-span'],
          borderRadius: '6px',
          border: 0,
        }}
      >
        <InputLabel
          id="demo-name-label"
          sx={{
            color: defaultTheme.colors['base-subtitle'],
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: '-10px',
            fontFamily: 'Nunito',
          }}
        >
          Repositórios
        </InputLabel>
        <Select
          labelId="demo-name-label"
          id="demo-name"
          value={repositoryName}
          onChange={handleChange}
          sx={{
            height: '30px',
            color: defaultTheme.colors['base-title'],
            fontFamily: 'Nunito',
          }}
          input={
            <OutlinedInput
              label="Name"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                height: 30,
              }}
            />
          }
          MenuProps={MenuProps}
        >
          {repositoriesNameList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, repositoryName, theme)}
              sx={{
                color: defaultTheme.colors['base-label'],
                fontFamily: 'Nunito',
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
