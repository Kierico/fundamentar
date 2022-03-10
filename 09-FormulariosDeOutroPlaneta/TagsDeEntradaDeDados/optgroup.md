# Optgroup

>O atributo '`label`' é importe no `<optgroup>`, para ter organização e divisão dos grupos.

<br>

<label for="petsGroups">Please choose one or more pets:</label><br>
<select name="pets" id="petsGroups" multiple size="7">
    <optgroup label="4-legged pets">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
        <option value="parro">Parrot</option>
        <option value="macaw">Macaw</option>
        <option value="albatross">Albatross</option>
    </optgroup>
</select>

<br>

```HTML
    <!-- HTML -->
    <label for="petsGroups">Please choose one or more pets:</label><br>
    <select name="pets" id="petsGroups" multiple size="7">
        <optgroup label="4-legged pets">    <!-- label -->
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster" disabled>Hamster</option>
        </optgroup>
        <optgroup label="Flying pets">
            <option value="parro">Parrot</option>
            <option value="macaw">Macaw</option>
            <option value="albatross">Albatross</option>
        </optgroup>
    </select>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

