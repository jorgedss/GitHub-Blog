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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export default function RepositorySelection() {
  const theme = useTheme()
  const [personName, setPersonName] = React.useState<string[]>([])

  const { repositoriesNameList, handleChangeRepository } =
    React.useContext(UserContext)

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event

    const selectedName = typeof value === 'string' ? value.split(',') : value
    const repositoryName = selectedName.join()
    setPersonName(selectedName)
    handleChangeRepository(repositoryName)

    localStorage.setItem('repository', JSON.stringify('repository'))
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
            color: defaultTheme.colors['base-input'],
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: '-10px',
          }}
        >
          Repositórios
        </InputLabel>
        <Select
          labelId="demo-name-label"
          id="demo-name"
          value={personName}
          onChange={handleChange}
          sx={{
            height: '30px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
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
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
